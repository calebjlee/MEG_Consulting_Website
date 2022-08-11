import { useState } from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #D0D1F2;
  display: flex;
  align-content:center;
  justify-content:center;
  flex-wrap: wrap;
  position: sticky;
  top: -1px;
  max-width: 100%;
`;

const ContentContainer = styled.div`
    height:30vh;
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    background-color: green;
`

const TitleTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: red;
`

const BodyContainer = styled.div`
    height:100%;
    width:50%;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
`

const TitleText = styled.h1`
    display: inline-block;
    font-size: 5vmin;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 700;
    text-align: left;
    color: #1e1e1e;
    line-height:.9;
`

const NewLine = styled.div`
    width:100%;
    height: ${props => props.height};
`
const RowContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`

const SelectionContainer = styled.div`
    position: relative;
    display: inline-block;
`

const SelectionContentContainer = styled.div`
    width: 100%;
    border-bottom: 2px solid #1e1e1e;
`

const SelectionOptionContainer = styled.div`
    position: absolute;
    top:100%;
    white-space: nowrap;
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-top:-2px;
    visibility: hidden;
    z-index: 10;
    ${SelectionContainer}:hover & {
        visibility: visible;
    }
`

const OptionContent = styled.div`
    display: inline-block;
    border: 2px solid grey;
    border-bottom: 0px solid grey;
    padding:1vmin;
    visibility: hidden;
    cursor: pointer;
    z-index: 10;

    &:hover {
        background-color: lavender;
    }
    ${SelectionContainer}:hover & {
        visibility: visible;
    };
`

function FitSection(){

    const engineering = ["Software Engineering", "Sustainability", "Machine Learning / Data Analytics", "Efficiency Optimization", "Chemical Engineering", "Autonomous Vehicles"]
    const business = ["Finance: Portfolio Management", "Finance: Venture Capital", "Marketing", "Real Estate", "Supply Chain", "Non-Profits"]
    const lsa = ["Economics", "Sustainability", "Machine Learning / Data Analytics","Software Engineering", "Healthcare"]
    const stamps = ["Graphic Design", "UI/UX Design"]
    const information = ["Machine Learning / Data Analytics", "UI/UX Design"]

    const [selection1, setSelection1] = useState("...")
    const [selection2, setSelection2] = useState("...")
    const [selection3, setSelection3] = useState("...")
    const [selected, setSelected] = useState(false)


    function handleSelection3(){
        if (selection2 === "The Ross School of Business"){
            return business
        }
        else if (selection2 === "The College of Engineering"){
            return engineering;
        }
        else if (selection2 === "The College of LSA"){
            return lsa
        }
        else if (selection2 === "The Stamps School of Art & Design"){
            return stamps
        }
        else if (selection2 === "The School of Information"){
            return information
        }
        else{
            return([])
        }
    }

    function handleSelection(){
        setSelected(true);
        setTimeout(()=>{
            setSelected(false);
        },1)
    }

    return(
        <SectionContainer>
            <TitleTextContainer>
                <TitleText>Match Your Passions to a Project</TitleText>
            </TitleTextContainer>
            <NewLine height = "0"/>
            <ContentContainer>
                <BodyContainer>
                    <RowContainer>
                        <TitleText>I am&nbsp;</TitleText>
                        <SelectionContainer style={{pointerEvents: !selected ? "auto":"none"}}>
                            <SelectionContentContainer ><TitleText>{selection1}</TitleText></SelectionContentContainer>
                            <SelectionOptionContainer onClick={()=>{handleSelection()}}>
                                <OptionContent onClick={()=> {setSelection1("a student"); setSelection2("..."); setSelection3("...")}}><TitleText>A Student</TitleText></OptionContent>
                                <OptionContent onClick={()=>setSelection1("a potential client")}><TitleText>A Potential Client</TitleText></OptionContent>
                            </SelectionOptionContainer>
                        </SelectionContainer>
                    </RowContainer>
                    <NewLine height = "5vh"/>
                    <RowContainer style={{visibility: selection1 === "a student" ? "visible":"hidden"}}>
                        <TitleText>Studying at&nbsp;</TitleText>
                        <SelectionContainer style={{pointerEvents: !selected ? "auto":"none"}}>
                            <SelectionContentContainer><TitleText>{selection2}</TitleText></SelectionContentContainer>
                            <SelectionOptionContainer onClick={()=>{handleSelection()}}>
                                <OptionContent onClick={()=> {setSelection2("The Ross School of Business"); setSelection3("...")}}><TitleText>The Ross School of Business</TitleText></OptionContent>
                                <OptionContent onClick={()=> {setSelection2("The College of Engineering"); setSelection3("...")}}><TitleText>The College of Engineering</TitleText></OptionContent>
                                <OptionContent onClick={()=> {setSelection2("The College of LSA"); setSelection3("...")}}><TitleText>The College of LSA</TitleText></OptionContent>
                                <OptionContent onClick={()=> {setSelection2("The Stamps School of Art & Design"); setSelection3("...")}}><TitleText>The Stamps School of Art {"&"} Design</TitleText></OptionContent>
                                <OptionContent onClick={()=> {setSelection2("The School of Information"); setSelection3("...")}}><TitleText>The School of Information</TitleText></OptionContent>
                            </SelectionOptionContainer>
                        </SelectionContainer>
                    </RowContainer>
                    <NewLine height = "5vh"/>
                    <RowContainer style={{visibility: selection2 !== "..." && selection1 === "a student" ? "visible":"hidden"}}>
                        <TitleText>Interested in&nbsp;</TitleText>
                        <SelectionContainer style={{pointerEvents: !selected ? "auto":"none"}}>
                            <SelectionContentContainer><TitleText>{selection3}</TitleText></SelectionContentContainer>
                            <SelectionOptionContainer onClick={()=>{handleSelection()}}>
                                {handleSelection3().map((data)=>(
                                    <OptionContent onClick={()=>setSelection3(data)}><TitleText>{data}</TitleText></OptionContent>
                                ))}
                            </SelectionOptionContainer>
                        </SelectionContainer>
                    </RowContainer>
                </BodyContainer>
                <BodyContainer style={{width: "40%"}}>
                    
                </BodyContainer>
            </ContentContainer>
            <NewLine height = "70vh"/>
        </SectionContainer>
    )
}

export default FitSection