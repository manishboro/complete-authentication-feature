import styled from "styled-components";

import { typography } from "./typography";

// Appointment Card styles
export const AppointmentCardAvatar = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AppointmentCardDetails = styled.div`
  width: calc(100% - 10rem);
  height: 100%;
  padding-left: 1rem;
`;

export const AppointmentItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: max-content;
  background-color: #e4dedeb5;
  cursor: pointer;
  position: relative;
  padding: ${(props) => props.padding ?? "2rem 1rem 5rem 1rem"};
  border-left: ${(props) => (props.state ? "5px solid #347fd4" : "5px solid #e4dedeb5")};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

export const TextZone = styled.div`
  font-size: ${typography.body1};
  display: flex;
  align-items: center;
  padding: 5px;

  h4 {
    font-weight: 600;
  }

  p {
    margin-left: 10px;
  }
`;

export const Select = styled.div`
  color: #347fd4;
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: ${typography.body4};
`;

// Appointment Cards container styles
export const ContainerListBox = styled.div`
  width: 100%;
  height: calc(100vh - 12rem - 3rem); // fullHeight - (header + footer) - padding and margin
  border-radius: 3px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #01a9f3;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: ${typography.body2};
`;

export const Message = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: ${typography.body2};
`;

export const DataContainer = styled.div`
  width: 100%;
  // height: ${(props) => props.height ?? "calc(100% - 10.5rem)"};
  padding: ${(props) => props.padding ?? "0 1rem"};
  margin: ${(props) => props.margin ?? "0.5rem 0 1rem 0"};
  overflow-y: scroll;
  position: relative;
  flex: 1;

  & > div:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0ae;
    height: 50px;
    border-radius: 2px;
    background-image: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      color-stop(0.5, rgba(255, 255, 255, 0.2)),
      color-stop(0.5, transparent),
      to(transparent)
    );
  }
`;
