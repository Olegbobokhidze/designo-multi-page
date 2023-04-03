import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoSchemaType, InvoiceType } from "../../types";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<InfoSchemaType>({
    resolver: zodResolver(InvoiceType),
    mode: "onChange",
  });
  const onSubmit = (data: InfoSchemaType) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <TextWrapper>
          <Title>Contact Us</Title>
          <Description>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </Description>
        </TextWrapper>
        <Input placeholder="Home" {...register("home")} />
        <Input placeholder="Email Address" {...register("email")} />
        <Input placeholder="Phone" {...register("phone")} />
        <TextArea placeholder="Your Message" {...register("message")} />
        <button>bbb</button>
      </Wrapper>
    </form>
  );
};

export default ContactForm;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 20px;
  background-color: #e7816b;
  margin-bottom: 70px;
`;
const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 500;
`;
const Description = styled.p`
  font-size: 15px;
  line-height: 25px;
  font-weight: 400;
  color: white;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  background-color: #e7816b;
  color: whitesmoke;
  border: none;
  border-bottom: 1px solid whitesmoke;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  border: none;
  border-bottom: 1px solid whitesmoke;
  background-color: #e7816b;
  color: whitesmoke;
  padding: 10px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;
