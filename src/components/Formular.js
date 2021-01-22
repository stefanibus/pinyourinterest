import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Formular = ({ filterPost }) => {
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  const sendValue = () => {
    if (inputValue.length > 0) {
      filterPost(inputValue);
      setInputValue("");
    }
  };
  return (
    <div>
      <Form inline>
        <Form.Label htmlFor="inlineFormInputName2" srOnly>
          Name
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Search request"
          value={inputValue}
          onChange={(e) => handleOnChange(e)}
        />
        <Button type="button" className="mb-2" onClick={() => sendValue()}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Formular;
