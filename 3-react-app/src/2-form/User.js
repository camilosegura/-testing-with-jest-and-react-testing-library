import React from "react";
import api from "./api";

export default function User() {
  const [isDisabled, setIsDisabled] = React.useState(false);

  function onSubmit(event) {
    event.preventDefault();

    setIsDisabled(true);

    const { name, "doc-type": docType } = event.target.elements;

    const data = {
      name: name.value,
      docType: docType.value,
    };

    console.log("event.target", data);
    api
      .create({ data })
      .then(({ data }) => {})
      .finally(() => setIsDisabled(false));
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Create user</h1>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" />
      <br />
      <label htmlFor="doc-type">Doc Type</label>
      <select id="doc-type" name="doc-type">
        <option value="cc">cc</option>
        <option value="ti">ti</option>
      </select>
      <br />
      <label htmlFor="doc-number">Doc Number</label>
      <input id="doc-number" name="doc-number" />
      <br />
      <label htmlFor="hobbies">Hobbies</label>
      <input id="hobbies" name="hobbies" />
      <br />
      <label htmlFor="description">Description</label>
      <textarea id="description" name="description"></textarea>
      <br />
      <button type="submit" disabled={isDisabled}>
        Save
      </button>
    </form>
  );
}
