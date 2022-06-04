import styled from "styled-components";

export const IntroContent = styled.div
`
`
export const Wrapper = styled.div
`
position: absolute;
width: fit-content;

`
export const Panel = styled.div
`
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    color: rgb(0, 0, 0);
    z-index: 1;
    width: fit-content;
    white-space: nowrap;
    display: inline-block;
    background: #fff;
    padding: 3px 10px;
    cursor: pointer;
    font-size: 13px;
    z-index: 1;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    border: 1px solid #FFF;
    border-radius: 4px;
    position:relative;
    &::after{
        content:'';
        position:absolute;
        top:100%;
        left:50%;
        width: 0px;
        height: 30px;
        background: transparent;
        border-left: 2px dashed rgba(255,255,255,0.6);
        transform: translateX(-50%);
    }
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);
        z-index: 4;
        border: 1px solid #CCC;
    }

`
export const Pin = styled.div
`
width:8px;
height:8px;
background:#FFF;
margin: auto;
margin-top: 30px;

`