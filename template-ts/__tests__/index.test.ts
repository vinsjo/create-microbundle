import { describe, expect, test } from '@jest/globals';
import {add} from "../src";

describe("sample test", () => {
    test("1 + 2 = 3", () => {
        expect(add(1,2)).toBe(3);
    })
})