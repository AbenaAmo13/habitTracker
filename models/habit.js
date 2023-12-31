import { Schema, model, models } from 'mongoose';
const HabitSchema = new Schema({
    habitName: {
      type: String,
      required: [true, 'Habit Name is required.'],
    },
    Description: {
        type: String,
        required: [true, 'Habit Description is required.'],
      },
      Goal: {
        frequency: String, // 'daily', 'weekly', 'monthly', etc.
        target: Number,    // Number of times (e.g., 3 times a week)
        required: [true, 'Habit Description is required.'],
      },
    Consistency:{
        type: Number,
        required: [false],
    }, 
    completedDays: [
        {
          date: Date,
          day: Number,    // 0 for Sunday, 1 for Monday, etc.
          month: Number,  // 0 for January, 1 for February, etc.
          year: Number,
        },
    ]
  });

  const Habit = models.Habit || model('Habit', HabitSchema);
  export default Habit;