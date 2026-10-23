import type React from "react"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../store/store"

import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeHabit, toggleHabit } from "../store/habit-slice";

const Habitlist: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const today = new Date().toISOString().split('T')[0]
    const { habits } = useSelector((state: RootState) => state.habits)
    return (<Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
        {habits.map((habit) => {
            return (<Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
                <Grid container >
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography variant="h6">{habit.name}</Typography>
                        <Typography variant="body2" sx={{ textTransform: "capitalize" }}>{habit.frequency}</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                            <Button variant="outlined" color={habit.completedDates.includes(today) ? "success" : "primary"} startIcon={<CheckCircleIcon />}
                                onClick={() => dispatch(toggleHabit({ id: habit.id, date: today }))}>
                                {habit.completedDates.includes(today) ? "completed" : "mark as completed"}</Button>
                            <Button variant="outlined" color="error" startIcon={<DeleteIcon></DeleteIcon>} onClick={() => { dispatch(removeHabit({ id: habit.id })) }}>Delete</Button>
                        </Box>

                    </Grid>


                </Grid>

            </Paper>)
        })}


    </Box >)

}
export default Habitlist