const API_BASE_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = ""; // Configure locally; never commit API keys.

const input = document.querySelector("#girdi");
const cityNode = document.querySelector(".sehir");
const temperatureNode = document.querySelector(".derece");
const conditionNode = document.querySelector(".durum");
const iconNode = document.querySelector(".img");
const dateNode = document.querySelector(".time");
const statusNode = document.querySelector(".status");

const setStatus = (message) => {
  if (statusNode) statusNode.textContent = message;
};

const getResult = async (cityName) => {
  const city = cityName.trim();
  if (!city) {
    setStatus("Lütfen bir şehir adı girin.");
    return;
  }
  if (!API_KEY) {
    setStatus("Hava durumu API anahtarı yapılandırılmamış.");
    return;
  }

  setStatus("Yükleniyor...");
  try {
    const query = new URLSearchParams({
      q: city,
      appid: API_KEY,
      units: "metric",
      lang: "tr",
    });
    const response = await fetch(`${API_BASE_URL}weather?${query}`);
    if (!response.ok) {
      throw new Error(response.status === 404 ? "Şehir bulunamadı." : "Hava durumu alınamadı.");
    }

    const result = await response.json();
    cityNode.textContent = `${result.name}, ${result.sys.country}`;
    temperatureNode.textContent = `${Math.round(result.main.temp)}°C`;
    conditionNode.textContent = result.weather?.[0]?.description ?? "";
    iconNode.replaceChildren();

    const icon = result.weather?.[0]?.icon;
    if (icon) {
      const image = document.createElement("img");
      image.src = `https://openweathermap.org/img/wn/${encodeURIComponent(icon)}.png`;
      image.alt = result.weather?.[0]?.description ?? "Hava durumu simgesi";
      iconNode.appendChild(image);
    }

    dateNode.textContent = new Intl.DateTimeFormat("tr-TR", {
      dateStyle: "medium",
    }).format(new Date());
    setStatus("");
  } catch (error) {
    setStatus(error instanceof Error ? error.message : "Beklenmeyen bir hata oluştu.");
  }
};

input?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") getResult(input.value);
});
