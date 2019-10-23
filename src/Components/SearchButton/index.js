import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "./style.css";

const SearchButton = () => (
  <div className="searchbutton">
    <Button animated circular color="red" size="big">
      <Button.Content visible>
        {" "}
        <Icon name="arrow right" />
      </Button.Content>
      <Button.Content hidden>
        <Icon name="arrow right" />
      </Button.Content>
    </Button>
  </div>
);

export default SearchButton;
