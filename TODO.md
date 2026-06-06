# TODO - Accessories/Adopt/PetCare/Medicine/Admin updates

## Step 1: Plan confirmation (done)
- Understand current code for Accessories, Adopt, PetCare, Medicine, Admin, routing.

## Step 2: Implement Accessories behavior
- Ensure Accessories page shows “Visit Shop / Collect” flow.
- Keep cart + tickbox items reserved until logout.
- Fix Explore by Pet for accessories (dog/cat/bird/rabbit/fish) buttons to route to pet-specific accessories sections/pages.

## Step 3: Implement Adopt Now detailed pet view + appointment workflow
- Expand details section to include: lifespan, age, native (South India only), ex-owner details, training, food, behavior, unhealthy care + medicine.
- Replace “Adopt now” pipeline so it does NOT finalize adoption; use “Visit Shop” flow.
- If “Visit shop” clicked: open appointment booking page/section.
- Ensure selected pet is reserved (not sold) until appointment is completed/expired.

## Step 4: Add Adopt sidebar navbar “Booked Appointments” + notifications
- At end of adopt page sidebar, show booked appointments list.
- Notify user before 1 day of appointment date.

## Step 5: Pet Medicine store pickup only
- Adjust Pet Medicine page so purchases are “come and collect from shop only”.
- Booking/collection appointment behavior where needed.

## Step 6: PetCare “Get started” button fix
- Fix non-working “Get Started” button.
- Ensure it opens booking appointment page (same booking workflow).

## Step 7: Admin panel completion
- Build complete admin panel UI for: all appointments, all orders, and list/reservation status.

## Step 8: Add more products on all relevant pages
- Add more accessories, pets, medicines (and any other required product lists) to match UI density.

## Step 9: Verify & run
- Run frontend build/tests and manually verify key flows:
  - login/logout persistence
  - cart tickbox reservation
  - pet-type filtering/explore routing
  - appointment booking & reservation lock
  - notifications rendering
  - admin list rendering

