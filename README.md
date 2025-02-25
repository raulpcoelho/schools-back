## API Routes

### Get All Schools

**Endpoint:** `GET /api/schools`

**Query Parameters:**

- `page` (optional): Specifies which page of results to retrieve. Defaults to the first page if not provided.
- `noEntidade` (optional): Filters results by the school name.

**Response:** Returns an array of schools.

### Get School by ID

**Endpoint:** `GET /api/schools/:coEntidade`

**Path Parameters:**

- `coEntidade` (required): The ID of the school to fetch.

**Response:** Returns a school.
