import React from "react";
import womenPhoto from "../../assets/photos/women-photo.jpg";
import menPhoto from "../../assets/photos/men-photo.jpg";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Photos, Section, Image, Gender, SectionLinks, GoIn, } from "./styles";


function Hero() {


    return <Photos>
        <Link to="/collection/women">
            <Section>
                <Image src={womenPhoto}></Image>
                <Gender>ONA</Gender>
                <SectionLinks>
                    <h2>KOLEKCJA DAMSKA</h2>
                    <GoIn>zobacz<FontAwesomeIcon icon={faCircleArrowRight} style={{ paddingLeft: "10px" }}></FontAwesomeIcon></GoIn>
                </SectionLinks>
            </Section>
        </Link>
        <Link to="/collection/men">
            <Section>
                <Image src={menPhoto}></Image >
                <Gender>ON</Gender>
                <SectionLinks>
                    <h2>KOLEKCJA MĘSKA</h2>
                    <GoIn>zobacz<FontAwesomeIcon icon={faCircleArrowRight} style={{ paddingLeft: "10px" }}></FontAwesomeIcon></GoIn>
                </SectionLinks>
            </Section>
        </Link>
    </Photos >
}

export default Hero