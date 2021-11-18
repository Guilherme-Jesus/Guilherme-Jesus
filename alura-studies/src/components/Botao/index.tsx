import React from 'react';

class Botao extends React.Component{
    render(){
        const isActive = false;
        return(
            <button style={{
                backgroundColor : isActive ? "green" : "red"
            }}>
                Botao
            </button>
        )
    }
}

export default Botao