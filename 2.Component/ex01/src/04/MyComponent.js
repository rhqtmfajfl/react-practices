import React, { Fragment } from 'react'
import {PropTypes} from 'prop-types';


export default function MyComponent({props01, props02, props03, props04, props05, props06, props07, props08}) {


  return (
    <Fragment>
        <h2>Property Validation</h2>
        <span>props01: {props01 ? props01 : '--- Not Set ---'}</span>
        <br/>
        <span>props02: {props02 ? props02 : '--- Not Set ---'}</span>
        <br/>
        <span>props03: {props03 ? `${props03}` : '--- Not Set ---'}</span>
        <br/>
        <span>props04: {props04 ? props04.no : '--- Not Set ---'}</span>
        <br/>
        <span>props05: {props05 ? props05.map((e,i) => <b key={i}>{e}</b>) : '--- Not Set ---'}</span>
        <br/>
        <span>props06: {props06 ? props06() : '--- Not Set ---'}</span>
        <br/>
        <span>props07: {props07 ? props07 : '--- Not Set ---'}</span>
        <br/>
        <span>props08: {props08 ? props08.map((e,i) => <b key={i}>{`${e}`}</b>) : '--- Not Set ---'}</span>
        <br/>
        <span>props09: 
          {
            props09 ? 
              <div>
                <h3>{props09.no}</h3>
                <h3>{props09.name}</h3>
                <h3>{props09.email}</h3>

              </div>
              : '--- Not Set ---'
          
          }
        </span>


    </Fragment>
  )

  //`${props03}` == ``+props03 두개는 같은 의미다.

}

// f()

MyComponent.propTypes = {
    // PropTypes Validator(primitive)
    props01: PropTypes.string,            //여기는 꼭 필요한건 아니므로 기본값이 들어간다.
    props02: PropTypes.number.isRequired,  //여기는 꼭필요하므로 100이 들어간다.
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.func.isRequired,

    //PropTypes Validator(combined primitive)
    props07: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,  
    //props07은 string도 되고 number도 된다.
      
    props08: PropTypes.arrayOf(PropTypes.bool).isRequired,

    props09: PropTypes.shape({
      no: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      ElementInternals: PropTypes.string.isRequired
 
    }).isRequired

  }
  //.isRequired



  //default value
  MyComponent.defaultProps = {
    props01: '기본값',
    props02: 10,
    props03: true,
    props04: {},
    props05: [],
    props06: () => {} //dummy 함수

  }