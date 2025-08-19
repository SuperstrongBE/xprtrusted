// Define the Trace interface.
// Add any additional properties needed.
interface Trace {
  id: number;
  traces?: Trace[];
  // Other properties can be added as needed.
  [key: string]: any;
}

/**
 * Recursively flattens an array of trace objects so that all traces,
 * regardless of depth, are returned as top-level objects with their nested
 * `traces` property removed.
 *
 * @param traces - Array of trace objects to be flattened.
 * @returns A flat array containing all trace objects without nested traces.
 */
export function flattenTraces(traces: Trace[]): Trace[] {
  return traces.reduce((flatArray, trace) => {
    // Destructure the current trace to remove any nested 'traces'.
    const { traces: nestedTraces, ...traceWithoutNested } = trace;

    // Add the current trace (without nested traces) to the flat array.
    let result = [traceWithoutNested];

    // If there are nested traces, recursively flatten them and concatenate.
    if (nestedTraces && nestedTraces.length > 0) {
      result = result.concat(flattenTraces(nestedTraces));
    }

    return flatArray.concat(result);
  }, [] as Trace[]);
}

// ----- Example Usage -----
const exampleTraces: Trace[] = [
  {
    id: 1,
    traces: [
      { id: 2 },
      { id: 3, traces: [{ id: 4 }] }
    ]
  },
  { id: 5 }
];

const allFlatTraces = flattenTraces(exampleTraces);
console.log(allFlatTraces);

/*
Expected output:
[
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 }
]
*/
