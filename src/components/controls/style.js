import styled from "styled-components";

export const Controls = styled.div
`
position:absolute;
z-index:3;
top:20px;
right:20px;
.item-control{
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    margin-bottom: 10px;
    button{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(250,250,250,0.99);
        box-shadow: 0 0 2px 0 rgba(0,0,0,0.3);
        text-align: center;
        transition: all 0.3s ease-in-out;
        border:none;
        position: relative;
        z-index: 3;
        svg{
            font-size:30px;
        }
       
    }
    .label{
        position:absolute;
        right:0;
        top:50%;
        transform:translate(10px,-50%);
         color: #234E52;
        margin-right: 10px;
        font-size: 16px;
        background-color: rgba(255,255,255,0.9);
        border-radius: 100px;
        padding: 10px 0 10px 20px;
        height: 40px;
        width:max-content;
        opacity: 0;
        overflow: hidden;
        white-space: nowrap;
        transition: all 0.3s;

    }
    &:hover{
        overflow:unset;
        .label{
            visibility:visible;
            opacity:1;
            transform:translate(-20px,-50%);
            padding:10px 30px 10px 20px;
        }
    }
}

`