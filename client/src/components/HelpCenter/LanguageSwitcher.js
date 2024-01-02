// LanguageSwitcher.js
import { useTranslation } from "react-i18next";
import { changeLanguage } from "./path-to-your-i18n-file"; // Adjust the path accordingly

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (newLang) => {
    changeLanguage(newLang);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("en")}>English</button>
      <button onClick={() => handleLanguageChange("fr")}>French</button>
      <button onClick={() => handleLanguageChange("es")}>French</button>
      {/* Add more buttons for other languages as needed */}
    </div>
  );
};

export default LanguageSwitcher;
