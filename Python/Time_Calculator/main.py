def add_time(start, duration, starting_day=None):
    # Days of the week list
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    # Split the start time
    start_time, period = start.split()
    start_hour, start_minute = map(int, start_time.split(":"))

    # Convert start time to 24-hour format
    if period == "PM" and start_hour != 12:
        start_hour += 12
    if period == "AM" and start_hour == 12:
        start_hour = 0

    # Split duration time
    duration_hour, duration_minute = map(int, duration.split(":"))

    # Add minutes and handle overflow
    final_minute = start_minute + duration_minute
    extra_hour = final_minute // 60
    final_minute = final_minute % 60

    # Add hours and handle days
    final_hour = start_hour + duration_hour + extra_hour
    days_later = final_hour // 24
    final_hour = final_hour % 24

    # Convert back to 12-hour format
    if final_hour >= 12:
        final_period = "PM"
    else:
        final_period = "AM"

    display_hour = final_hour % 12
    if display_hour == 0:
        display_hour = 12

    # Build the new time string
    new_time = f"{display_hour}:{final_minute:02d} {final_period}"

    # Add the day if provided
    if starting_day:
        index = days.index(starting_day.capitalize())
        new_day = days[(index + days_later) % 7]
        new_time += f", {new_day}"

    # Add days later info
    if days_later == 1:
        new_time += " (next day)"
    elif days_later > 1:
        new_time += f" ({days_later} days later)"

    return new_time

print(add_time('3:00 PM', '3:10'))  # ➞ '6:10 PM'
print(add_time('11:30 AM', '2:32', 'Monday'))  # ➞ '2:02 PM, Monday'
print(add_time('10:10 PM', '3:30'))  # ➞ '1:40 AM (next day)'
print(add_time('6:30 PM', '205:12'))  # ➞ '7:42 AM (9 days later)'
