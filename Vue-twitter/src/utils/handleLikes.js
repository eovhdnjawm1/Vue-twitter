import { LIKE_COLLECTION, TWEET_COLEECTION } from '../firebase'
import store from '../store'
import firebase from 'firebase'

export default async (tweet) => {
	try {
		// Already liked
		if (tweet.isLiked) {
			const snapshot = await LIKE_COLLECTION.where('from_tweet_id', '==', tweet.id).where('uid', '==', store.state.user.uid).get()
			await snapshot.docs[0].ref.delete()
			await TWEET_COLEECTION.doc(tweet.id).update({
				num_likes: firebase.firestore.FieldValue.increment(-1),	
			})
		}
		// not liked
		else {
			const doc = LIKE_COLLECTION.doc()
			await doc.set({
				id: doc.id,
				from_tweet_id: tweet.id,
				uid: store.state.user.uid,
				created_at: Date.now(),
			})
			// first retweeted
			await TWEET_COLEECTION.doc(tweet.id).update({
				num_likes: firebase.firestore.FieldValue.increment(1),
			});
		}
	} catch (e) {
		console.log('handle retweet error:', e)
	}

}

