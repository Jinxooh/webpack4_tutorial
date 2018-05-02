import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';
import Responsive from '../components/common/Responsive';
import ButtonBasic from '../components/common/Guide/ButtonBasic';
import RadioBasic from '../components/common/Guide/RadioBasic';
import ColorBasic from '../components/common/Guide/ColorBasic';
import FontBasic from '../components/common/Guide/FontBasic';
import TableBasic from '../components/common/Guide/TableBasic';

class Guide extends Component {
    // consoleUser = () => {
    //     console.log('hey');
    //     const { pushRoute } = this.props;
    //     pushRoute('/credentials/roles');
  
    // }

    render() {
        // const { projects } = this.props;
        // const { consoleUser } = this;
        // console.log(projects);

        
        const name  = 'Guide Main'
        return(
            <Responsive>
                <div>{name}</div>
                <div>
                    <FontBasic/>
                </div>
                <div>
                    <ButtonBasic type="btnOk" size='small'/>
                    <ButtonBasic type="btnCancel" size="medium" />
                    <ButtonBasic type="btnMove" size="large" />
                </div>  
                <div>
                    <RadioBasic/>
                </div>
                <div>
                    <ColorBasic/>
                </div>
                <div>
                    <TableBasic/>
                </div>
            </Responsive>
        );
    }
}


Guide = connect(state => ({
    projects: state.projects,
    selectedProject: state.projects.selectedProject,
  }), actions)(Guide);
  
export default Guide;