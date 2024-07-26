import { Request, Response } from "express";
import { IncreaseStockController } from "./IncreaseStockController";
import { IncreaseStockUseCase } from "./IncreaseStockUseCase";
import { IncreaseStockRequestDto } from "./IncreaseStockDto";

jest.mock('./IncreaseStockUseCase')

// Mocks
const mockRequest = () => {
    return {
        body: {
            name: "jorao",
            altura: "pedro"
        }
    } as Request;;
};

const mockResponse = () => {
    const res = {} as Response;
    res.status = jest.fn().mockReturnThis();
    res.send = jest.fn().mockReturnThis();
    res.sendStatus = jest.fn().mockReturnThis();
    return res;
};

const IncreaseStockUseCaseMock = IncreaseStockUseCase as jest.Mock<IncreaseStockUseCase>

// SUT Factory
const sutFactory = () => {
    const requestMock = mockRequest();
    const responseMock = mockResponse();
    const increaseStockUseCaseMock = new IncreaseStockUseCaseMock as jest.Mocked<IncreaseStockUseCase>;
    const sut = new IncreaseStockController(increaseStockUseCaseMock) as jest.Mocked<IncreaseStockController>;

    return {
        sut,
        request: requestMock,
        response: responseMock,
        increaseStockUseCaseMock
    };
};

// Test Suite
describe('IncreaseStockController', () => {
    it('should return status 200 when stock is increased successfully', async () => {
        const { sut, request, response, increaseStockUseCaseMock } = sutFactory();

        await sut.handle(request, response);

        expect(increaseStockUseCaseMock.execute).toHaveBeenCalledTimes(1);
        expect(increaseStockUseCaseMock.execute).toHaveBeenCalledWith(request.body);
        expect(response.send).toHaveBeenCalledWith(200);
    });

    // it('should return status 500 when an body error', async () => {
    //     const { sut, request, response, increaseStockUseCaseMock } = sutFactory();
    //     (increaseStockUseCaseMock.execute as jest.Mock).mockRejectedValue(new Error('test error'));

    //     await sut.handle(request, response);

    //     expect(response.sendStatus).toHaveBeenCalledWith(500);
    // });
});


// learn tests
// https://www.youtube.com/watch?v=VH_RfTFBgKE&ab_channel=Ot%C3%A1vioMiranda