import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
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
      const response = await caches.match(request);

      if (response) {
        return response;
      }

      return this._fetchRequest(request);
    } catch (error) {
      throw new Error(`Error revalidating cache: ${error.message}`);
    }
  },

  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _fetchRequest(request) {
    try {
      const response = await fetch(request);

      if (!response || response.status !== 200) {
        return response;
      }

      await this._addCache(request);
      return response;
    } catch (error) {
      throw new Error(`Error fetching request: ${error.message}`);
    }
  },

  async _addCache(request) {
    try {
      const cache = await this._openCache();
      await cache.add(request);
    } catch (error) {
      throw new Error(`Error adding to cache: ${error.message}`);
    }
  },
};

export default CacheHelper;
