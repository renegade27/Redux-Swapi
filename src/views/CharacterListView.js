import React from "react";
import { connect } from "react-redux";
import { fetch } from '../actions'
import { CharacterList } from "../components";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if (this.props.fetching) {
      return (
        <p> Fetching data... </p>
      );
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    characters : state.charsReducer.characters,
    fetching : state.charsReducer.fetching
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetch
  }
)(CharacterListView);
