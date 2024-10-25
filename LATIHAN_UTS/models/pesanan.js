const mongoose = require("mongoose");

const pesananSchema = new mongoose.Schema({
    produk_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Produk",
        require: true,
    },
    presentase_diskon: {
    type: Number,

    },
    tanggal_mulai: {
        type: Date,

    },
    tanggal_selesai: {
        type: Date,
    },
    keterangan: {
        type: String,
    }
});

const Pesanan = mongoose.model('Pesanan', pesananSchema);
module.exports = Pesanan;
