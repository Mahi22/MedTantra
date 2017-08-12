import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import getData from "store/getactions";
import { startFetch } from "store/actions";
// const CheckboxOption = props => {
//   const { value, isChecked, children } = props;
//   return (
//     <Option className="react-select-option" value={value}>
//       <input
//         type="checkbox"
//         className="react-select-option__checkbox"
//         defaultValue={null}
//         checked={isChecked} />
//       <div className="react-select-option__label">
//         {children}
//       </div>
//     </Option>
//   );
// };
@connect(state => ({ authenticators: state.authenticators, loading: state.fetchstatus  }))
class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValues: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.input.onChange(value);
    this.setState({
      currentValues: value
    });
  }

  render() {
    let { currentValues } = this.state;
    const { name, placeholder, authenticators, loading, value, meta, input } = this.props;

    let options = [];

    if (authenticators.length === 0) {
      this.props.dispatch(startFetch());
      this.props.dispatch(getData("systemAuthenticators"));
    } else {
      options = authenticators.map(auth => ({ label: auth.description, value: auth.aaid }));
      if (value && !meta.dirty) {
        currentValues = options.filter(obj => value.find(ele => ele === obj.value));
      }
    }


    if (input.value.filter && currentValues) {
      const result = input.value.filter(e => !currentValues.includes(e));
      if (result.length > 0) {
        currentValues = result;
      }
    }

    return (
      <Select
        multi
        name={name}
        options={options}
        onChange={this.handleChange}
        placeholder={placeholder}
        isLoading={loading}
        value={currentValues} />
    );
  }
}

export default MultiSelect;
