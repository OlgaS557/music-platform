# Copilot Instructions for music-platform

## Architecture Overview
- **Backend:** Built with NestJS (TypeScript), located in `server/`. Main entry: `server/src/main.ts`.
- **Modules:** Organized by domain (e.g., `track`, `album`, `file`). Each module has its own controller, service, DTOs, and schemas.
- **Database:** Uses MongoDB via Mongoose. Schemas are in `server/src/track/schemas/` and similar folders.
- **File Handling:** File uploads (audio/image) are processed in `FileService` (`server/src/file/file.service.ts`), saved to a local `static/` directory.
- **Data Flow:** Controllers receive HTTP requests, validate/parse input, and delegate to services. Services handle business logic and interact with models and file system.

## Developer Workflows
- **Install dependencies:**
  ```bash
  npm install
  ```
- **Run server (dev):**
  ```bash
  npm run start:dev
  ```
- **Run server (prod):**
  ```bash
  npm run start:prod
  ```
- **Run tests:**
  ```bash
  npm run test      # unit tests
  npm run test:e2e  # e2e tests
  npm run test:cov  # coverage
  ```

## Project-Specific Patterns
- **File Uploads:** Use `FileFieldsInterceptor` in controllers for multi-file upload. Uploaded files are accessed via `@UploadedFiles()` and passed to `FileService.createFile()`.
- **Error Handling:** Services throw `HttpException` with appropriate status codes for operational errors.
- **MongoDB IDs:** Always use `string` for document IDs in controllers/services.
- **DTOs:** All input data is validated via DTOs in `dto/` folders.
- **Populate:** For relations (e.g., comments on tracks), use `.populate()` in Mongoose queries.

## Integration Points
- **External:**
  - MongoDB (via Mongoose)
  - Multer (for file uploads)
- **Internal:**
  - Cross-module service injection (e.g., `TrackService` uses `FileService`)

## Conventions
- **Folder Structure:**
  - `server/src/<module>/controller.ts` — HTTP endpoints
  - `server/src/<module>/service.ts` — business logic
  - `server/src/<module>/dto/` — input validation
  - `server/src/<module>/schemas/` — Mongoose schemas
- **Static Files:** All uploaded files are stored in `server/static/`.
- **Error Messages:** Return clear error messages for missing files or invalid input.

## Example: Track Upload
- POST `/tracks` with `form-data` fields `picture` (image file) and `audio` (audio file)
- Controller parses files, validates presence, and calls service to save files and create DB record

## Key Files
- `server/src/track/track.controller.ts` — Track endpoints
- `server/src/track/track.service.ts` — Track logic
- `server/src/file/file.service.ts` — File handling
- `server/README.md` — Build/test instructions

---
For questions or unclear conventions, check `README.md` or ask for clarification.
