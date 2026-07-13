import { Box, TextField } from "@mui/material";
import React, {useState} from 'react';

const AddHabitForm = () => {
    const [name, setName] = useState("");
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

    return (
        <form>
            <Box>
                <TextField label="Habit Name"/>
            </Box>
        </form>
    )
}

export default AddHabitForm;