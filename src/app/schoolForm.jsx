"use client";
import React, { useState } from "react";
import {
  TextInput,
  Button,
  Container,
  Paper,
  Group,
  Stack,
} from "@mantine/core";
import axios from "axios";
// import { useRouter } from "next/navigation";
import classes from "./schoolForm.module.css";

const SchoolForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    // const router = useRouter();
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("image", file);

    try {
      const response = await axios.post(
        "http://localhost:9000/insert",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage(response.data.message);
      setImageUrl(response.data.filePath);
      // router.push('./(main)/viewData')
    } catch (error) {
      setMessage("Upload failed");
    }
  };

  return (
    <Container fluid mt={"xl"} className={classes.wrapper}>
      <Paper withBorder shadow={"md"} p={30} className={classes.bor}>
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className={classes.field}
              required
            />
            <TextInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={classes.field}
              required
            />
            <TextInput
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Contact"
              className={classes.field}
              required
            />
            <TextInput
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className={classes.field}
              required
            />
            <TextInput
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className={classes.field}
              required
            />
            <TextInput
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
              className={classes.field}
              required
            />
            <Stack>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
              className={classes.file}
            />
            </Stack>
          </Stack>
          <Group justify="space-between" mt="md">
            <Button type="submit" radius="xl" style={{letterSpacing:'1px'}}>
              Submit
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default SchoolForm;
