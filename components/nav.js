"use client";
import Link from 'next/link'


const Navigation = () => {
    return (
      <div>
        <h1>Habit Tracker 2024</h1>
          <Link href="/add-habit">
            <p>Add habit</p>
          </Link>
      </div>
    )
  }

  export default Navigation;