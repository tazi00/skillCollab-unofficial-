// Function to set data to local storage
export function setDataToLocal(key: string, data: any) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true; // Return true on success
  } catch (error) {
    console.error("Error setting data to local storage:", error);
    return false; // Return false on error
  }
}

// Function to get data from local storage
export function getDataFromLocal(key: string) {
  try {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : null; // Return parsed data if exists, otherwise null
  } catch (error) {
    console.error("Error getting data from local storage:", error);
    return null; // Return null on error
  }
}
