const stateDefault = {
    mangNguoiDung: [
        {
            id: 1,
            userName: 'Nguyen Van A',
            phone: '012312312',
            email: 'hung0159@gmail.com',
        },
        {
            id: 2,
            userName: 'Nguyen Van B',
            phone: '01267862312',
            email: 'van0159@gmail.com',
        },
    ],
}

export const reactFormReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'THEM_NGUOI_DUNG': {
			// state.mangNguoiDung.push(action.payload)
			// mangNguoiDung trước và sau sẽ cung giá trị, địa chỉ ô nhớ

			state.mangNguoiDung = [...state.mangNguoiDung, action.payload];
			return { ...state };
		}
        default:
            return state;
    }
}