import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const CreateSequenceForm = () => {
  const initialAmountPictograms = 1;
  const [amountPictograms, setAmountPictograms] = useState(
    initialAmountPictograms
  );

  const handleChangesAmountPictograms = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAmountPictograms(+event.target.value);
  };

  return (
    <Form className="SelectPictogram-form p-3">
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nom</Form.Label>
        <Form.Control
          type="text"
          placeholder="Introduïu el nom de la seqüència"
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="private">
        <Form.Check type="checkbox" label="Privada" />

        <Form.Text className="text-muted login-form__text">
          clicar, si no voleu compartir la seqüència
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="amountPictograms">
        <Form.Label>Quantitat de pictogrames</Form.Label>
        <Form.Control
          type="number"
          placeholder={amountPictograms.toString()}
          autoComplete="off"
          onChange={handleChangesAmountPictograms}
        />
      </Form.Group>
      <Form.Label>
        Selecciona cada un dels pictogrames de la teva seqüència
      </Form.Label>
      {[...Array(amountPictograms)].map((elementInArray, index) => (
        <Button className="m-2" key={index}>
          Pictograma {index + 1}
        </Button>
      ))}
    </Form>
  );
};

export default CreateSequenceForm;
