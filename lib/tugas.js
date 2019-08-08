const urut = (data) => {
    return data.sort();
    
}

const tambah = (data, input) => {
	data.push(input);
	data.sort();

    return data.reverse();
}

module.exports = {
    urut: urut,
    tambah: tambah
}
