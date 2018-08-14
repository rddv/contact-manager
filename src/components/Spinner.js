import React from 'react';
import { ClipLoader } from 'react-spinners';
import { Consumer } from '../context';

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <Consumer>
                {value => {
                    const { spinner } = value;
                    return(
                        <div
                            className='sweet-loading'
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                display: spinner ? 'flex' : 'none',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(220, 53, 69, 0.2)'
                            }}>
                            <ClipLoader
                                sizeUnit={"px"}
                                size={150}
                                color={'#dc3545'}
                                loading={spinner}
                            />
                        </div>
                    )
                }}
            </Consumer>

        )
    }
}

export default Spinner;