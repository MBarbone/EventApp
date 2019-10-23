import React from "react";
import { Form, Dropdown } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import LocationSearchInput from "../LocationSearchInput/index";
import SearchButton from "../SearchButton/index";
import "./style.css";

const eventOptions = [
  {
    key: "Anything",
    text: "Anything",
    value: "Anything"
  },
  {
    key: "Auto, Boat & Air",
    text: "Auto, Boat & Air",
    value: "Auto, Boat & Air"
  },
  {
    key: "Business",
    text: "Business",
    value: "Business"
  },
  {
    key: "Charity & Causes",
    text: "Charity & Causes",
    value: "Charity & Causes"
  },
  {
    key: "Community",
    text: "Community",
    value: "Community"
  },
  {
    key: "Family & Education",
    text: "Family & Education",
    value: "Family & Education"
  }
];

class Spotlight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: ""
    };
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  render() {
    return (
      <div className="spotlight-wrapper">
        <div className="spotlight-image"></div>
        <div className="spotlight-form">
          <Form>
            <div className="search-form-field-container">
              <label className="search-form-labels">When?</label>
              <div className="search-form-field">
                <DateInput
                  name="date"
                  popupPosition="bottom center"
                  placeholder="Date"
                  markColor="red"
                  dateFormat="MM-DD-YYYY"
                  autoComplete="false"
                  value={this.state.date}
                  iconPosition="left"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="search-form-field-container">
              <label className="search-form-labels">What?</label>
              <Dropdown
                className="search-form-field"
                placeholder="Type of Event"
                fluid
                selection
                options={eventOptions}
              />
            </div>

            <div className="search-form-field-container">
              <label className="search-form-labels">Where?</label>
              <div className="search-form-field">
                <LocationSearchInput className="search-form-field" />
              </div>
            </div>

            <SearchButton />
          </Form>
        </div>
        <p className="spotlight-text">Greta Van Fleet</p>
      </div>
    );
  }
}

export default Spotlight;
