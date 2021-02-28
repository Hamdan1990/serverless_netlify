const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    const { data } = await axios.get("/.netlify/functions/1-hello");
    result.textContent = data;
  } catch (e) {
    console.error(e);
  }
};

fetchData();
