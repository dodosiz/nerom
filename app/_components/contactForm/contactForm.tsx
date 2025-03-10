"use client";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Skeleton,
  TextField,
  Theme,
  useTheme,
} from "@mui/material";
import styles from "./contactForm.module.css";
import { useLang, useLocalized } from "../../localization";
import { useState } from "react";
import { sendMessage } from "../../lib/contact";
import { isValidEmail, isValidMessage } from "../../lib/utils";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export function ContactForm() {
  const lang = useLang();
  const theme = useTheme();
  const [subject, setSubject] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validSubject, setValidSubject] = useState(true);
  const [validMail, setValidMail] = useState(true);
  const [validMessage, setValidMessage] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjects = [
    useLocalized("contact.subject.options.general", lang),
    useLocalized("contact.subject.options.engineering", lang),
    useLocalized("contact.subject.options.business", lang),
    useLocalized("contact.subject.options.other", lang),
  ];

  const invalidSubjectHint = useLocalized("contact.subject.hint", lang);
  const invalidEmailHint = useLocalized("contact.email.hint", lang);
  const invalidMessageHint = useLocalized("contact.message.hint", lang);
  const subjectLabel = useLocalized("contact.subject.label", lang);
  const emailLabel = useLocalized("contact.email.label", lang);
  const messageLabel = useLocalized("contact.message.label", lang);
  const sendButtonLabel = useLocalized("contact.send", lang);

  const handleSubjectChange = (event: SelectChangeEvent<typeof subjects>) => {
    const {
      target: { value },
    } = event;
    setSubject(typeof value === "string" ? value.split(",") : value);
  };

  const handleSubjectBlur = () => {
    setValidSubject(subject.length > 0);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleEmailBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setValidMail(isValidEmail(event.target.value));
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
    setValidMessage(isValidMessage(event.target.value));
  };

  const isSubmitDisabled = () => {
    const invalid = !validMail || !validMessage;
    const empty = !email || !message || !subject.length;
    return invalid || empty;
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (isSubmitDisabled()) {
      return;
    }
    sendMessage(subject.join(", "), email, message);
  };

  return (
    <>
      {isSubmitting && (
        <div className={styles.formContainer}>
          <Skeleton
            className={styles.formControl}
            variant="rectangular"
            height={40}
          />
          <Skeleton
            className={styles.formControl}
            variant="rectangular"
            height={40}
          />
          <Skeleton
            className={styles.formControl}
            variant="rectangular"
            height={120}
          />
          <Skeleton
            className={styles.submitButton}
            variant="rectangular"
            height={40}
          />
        </div>
      )}
      {!isSubmitting && (
        <form className={styles.formContainer} onSubmit={handleFormSubmit}>
          <FormControl className={styles.formControl} error={!validSubject}>
            <InputLabel id="subject-label">{subjectLabel}</InputLabel>
            <Select
              labelId="subject-label"
              id="subject"
              value={subject}
              onChange={handleSubjectChange}
              input={<OutlinedInput label={subjectLabel} />}
              MenuProps={MenuProps}
              error={!validSubject}
              onBlur={handleSubjectBlur}
            >
              {subjects.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, subject, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
            {!validSubject && (
              <FormHelperText>{invalidSubjectHint}</FormHelperText>
            )}
          </FormControl>
          <FormControl className={styles.formControl} error={!validMail}>
            <TextField
              onChange={handleEmailChange}
              value={email}
              variant="outlined"
              label={emailLabel}
              id="email"
              type="email"
              error={!validMail}
              onBlur={handleEmailBlur}
              helperText={!validMail ? invalidEmailHint : ""}
            />
          </FormControl>
          <FormControl className={styles.formControl} error={!validMessage}>
            <TextField
              onChange={handleMessageChange}
              value={message}
              label={messageLabel}
              variant="outlined"
              id="message"
              multiline
              error={!validMessage}
              helperText={!validMessage ? invalidMessageHint : ""}
              rows={4}
            />
          </FormControl>
          <Button
            className={styles.submitButton}
            type="submit"
            disabled={isSubmitDisabled()}
            variant="contained"
            color="success"
          >
            {sendButtonLabel}
          </Button>
        </form>
      )}
    </>
  );
}
