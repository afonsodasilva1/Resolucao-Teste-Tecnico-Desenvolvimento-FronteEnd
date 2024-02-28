"use client";
import { createTheme, Button, ActionIcon } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

export const theme = createTheme({
  components: {
    DatePickerInput: DatePickerInput.extend({
      classNames: {
        root:'datePicker',
        label:'my-label-class',
        input:'my-input-class',
      },
      styles: {
        root: { },
        input: { 
          paddingBlock: "4px",
          outline: 'none',
          borderColor: '#5F8D4E',
        },
      },
    }),
    Button: Button.extend({
      classNames: {
        root:'datePicker',
        label:'my-label-class',
      },
      styles: {
        root: { 
         },
      },
    }) ,
    ActionIcon: ActionIcon.extend({
      classNames: {
        root:'datePicker',
      },
      styles: {
        root: { 
          background: '#F4FFF3',
         },
      },
    }) 
  },
});

