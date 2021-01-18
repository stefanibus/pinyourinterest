import react from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const Formular = () => {
  return (
    <div>
      Hier ist das <span>Formular</span>
      <Form inline>
        <Form.Label htmlFor="inlineFormInputName2" srOnly>
          Name
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Search request"
        />
        <Button type="submit" className="mb-2">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Formular;
