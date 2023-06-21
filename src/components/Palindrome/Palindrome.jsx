import { useState } from "react";
import swal from 'sweetalert';


const Palindrome = () => {
  const [state, setState] = useState({
    text: ""
  });

  const checkPalindrome = (text) => {
    const cleanText = text.replace(/[^a-zA-Z]/g, '');
    const revers = cleanText.split('').reverse().join('').toUpperCase();
    return cleanText === revers;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {text} = state;
    if (checkPalindrome(text)) {
      return swal("true");
    }
    swal('false')
    setState({
    text: ""
  });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const {text} = state;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Palindrome</label>
        <input
          name="text"
          value={text}
          onChange={handleChange}
          required
          type="text"
        />
        <button>Check</button>
      </form>
    </div>
  );
};

export default Palindrome;
