import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import type React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { addHabit } from "../store/habit-slice";

const AddHabitForm: React.FC = () => {
    const [name, setname] = useState<string>("")
    const [frequency, setfrequency] = useState<"daily" | "weekly">("daily")
    const dispatch = useDispatch<AppDispatch>()
    const handlesubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (name.trim()) {
            dispatch(addHabit({ name, frequency }))
            console.log(name)
            setname("")
        }

    }
    return <form onSubmit={handlesubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField label='Habit name' value={name} onChange={(e) => setname(e.target.value)}
                placeholder="enter habit name" fullWidth></TextField>
            <FormControl fullWidth>
                <InputLabel>Frequency</InputLabel>
                <Select value={frequency} onChange={(e) => setfrequency(e.target.value as 'daily' | 'weekly')}>
                    <MenuItem value="daily">daily</MenuItem>
                    <MenuItem value="weekly">weekly</MenuItem>

                </Select>

            </FormControl>
            <Button type="submit" variant="contained" color="primary">Add Habit</Button>
        </Box>

    </form>

}
export default AddHabitForm