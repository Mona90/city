import styled from "styled-components";

export const Overlay = styled.div
`
position:fixed;
height:100vh;
z-index:6;
top:0;
left:0;
width:100%;
background:rgb(0 0 0 / 43%);
`
export const Menu = styled.div
`
width:350px;
height:100%;
background:#FFF;
padding: 35px 0;
ul{
    margin-top: 35px;
    li{
        padding:13px 30px;
        display:flex;
        justify-content:space-start;
        align-items:center;
        color:#2D3E56;
        font-size: 16px;
        font-weight: 300;
        svg{
            font-size: 22px;
        }
    }
}
`