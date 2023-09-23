import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await caches.open(CONFIG.CACHE_NAME);
    await cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    const cachePromises = cacheNames
        .filter((name) => name !== CONFIG.CACHE_NAME)
        .map((filteredName) => caches.delete(filteredName));

    await Promise.all(cachePromises);
  },

  async revalidateCache(request) {
    try {
      const response = await caches.match(request) || await fetch(request);

      if (!response || response.status !== 200) {
        throw new Error('Invalid response');
      }

      await this._addCache(request, response.clone());
      return response;
    } catch (error) {
      throw new Error(`Error revalidating cache: ${error.message}`);
    }
  },

  async _addCache(request, response) {
    try {
      const cache = await caches.open(CONFIG.CACHE_NAME);
      await cache.put(request, response);
    } catch (error) {
      throw new Error(`Error adding to cache: ${error.message}`);
    }
  },
};

export default CacheHelper;
