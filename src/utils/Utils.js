/**
 * Fetch data from the provided URL
 *
 * @param {string} url
 * @returns
 */
export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * right now its very very basic but we can add more functionality to detect devices
 *
 * @returns {boolean}
 */
export const isMobileDevice = () => window.innerWidth < 768;
