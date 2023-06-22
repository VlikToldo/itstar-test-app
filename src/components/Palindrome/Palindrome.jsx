import { useState } from "react";
import swal from "sweetalert";

import styles from "./palindrome.module.css";

const Palindrome = () => {
  const [state, setState] = useState({
    text: "",
  });

  const checkPalindrome = (text) => {
    const normalizedText = text
      .replace(/[^a-zA-Z0-9а-яА-ЯіїєґїҐЇЄ]/g, "")
      .toUpperCase();
    const revers = normalizedText.split("").reverse().join("");
    return normalizedText === revers;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { text } = state;
    if (checkPalindrome(text)) {
      return swal("true");
    }
    swal("false");
    setState({
      text: "",
    });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const { text } = state;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.boxInput}>
          <label>Palindrome</label>
          <input
            className={styles.textField}
            name="text"
            value={text}
            onChange={handleChange}
            required
            type="text"
          />
          <button className={styles.buttonCheck}>Check</button>
        </div>
      </form>
    </div>
  );
};

export default Palindrome;
