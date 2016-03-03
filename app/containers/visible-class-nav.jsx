import { connect } from 'react-redux'
import ClassNav from '../components/class-nav.jsx'
import { selectClass } from '../actions.js'


const mapStateToProps = (state) => {
  return {
    classes: state.classes.classesIdList.map((id) => {
      return {
        id: id,
        text: state.classes.classesById[id].text
      }
    }),
    valueLink: {
      value: 1
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClassClick: (id) => {
      dispatch(selectClass(id))
    }
  }
}

const VisibleClassNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassNav)

export default VisibleClassNav