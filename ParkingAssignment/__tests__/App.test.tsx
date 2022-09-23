import { render, fireEvent } from "@testing-library/react-native";
import Home from "../src/screens/Home";
import CreateSlots from '../src/screens/CreateSlots';
import RegisterSlots from '../src/screens/RegisterSlots';
import ClearSlots from '../src/screens/ClearSlots';

describe("App test suite", () => {

    const props = {
        navigation: {
            navigate: jest.fn(),
            goBack: jest.fn()
        }
    }

    it("works", () => {
        const test = true;
        expect(test).toBe(true);
    });

    it("renders home screen", () => {
        render(<Home { ...props } />);
    });

    it("renders CreateSlots screen", () => {
        render(<CreateSlots { ...props } />);
    });

    it("renders RegisterSlots screen", () => {
        render(<RegisterSlots { ...props } />);
    });

    it("renders ClearSLots screen", () => {
        render(<ClearSlots { ...props } />);
    });

    it("matches CreateSlots snapshot", () => {
        const tree = render(<CreateSlots { ...props } />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it("matches RegisterSlots screen", () => {
        const tree = render(<RegisterSlots { ...props } />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it("renders ClearSlots screen", () => {
        const tree = render(<ClearSlots { ...props } />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it("matches home testId", () => {
        const tree = render(<Home />);
        expect(tree.findByTestId("home")).toBeTruthy();
    });

    it("matches CreateSlots testID", () => {
        const tree = render(<CreateSlots />);
        expect(tree.findByTestId("parking-create-submit-button")).toBeTruthy();
        
    });
});