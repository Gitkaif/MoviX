import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '../firebase/config';

// Get user data from Firestore
export const getUserData = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.log('No user document found');
      return null;
    }
  } catch (error) {
    console.error('Error getting user data:', error);
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (uid, profileData) => {
  try {
    await updateDoc(doc(db, 'users', uid), {
      ...profileData,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Add movie to favorites
export const addToFavorites = async (uid, movieId) => {
  try {
    await updateDoc(doc(db, 'users', uid), {
      favoriteMovies: arrayUnion(movieId),
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error adding to favorites:', error);
    throw error;
  }
};

// Remove movie from favorites
export const removeFromFavorites = async (uid, movieId) => {
  try {
    await updateDoc(doc(db, 'users', uid), {
      favoriteMovies: arrayRemove(movieId),
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error removing from favorites:', error);
    throw error;
  }
};

// Add movie to watchlist
export const addToWatchlist = async (uid, movieId) => {
  try {
    await updateDoc(doc(db, 'users', uid), {
      watchlist: arrayUnion(movieId),
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error adding to watchlist:', error);
    throw error;
  }
};

// Remove movie from watchlist
export const removeFromWatchlist = async (uid, movieId) => {
  try {
    await updateDoc(doc(db, 'users', uid), {
      watchlist: arrayRemove(movieId),
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error removing from watchlist:', error);
    throw error;
  }
};

// Update user preferences
export const updateUserPreferences = async (uid, preferences) => {
  try {
    await updateDoc(doc(db, 'users', uid), {
      preferences: {
        ...preferences,
        updatedAt: new Date().toISOString()
      },
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error updating preferences:', error);
    throw error;
  }
};
