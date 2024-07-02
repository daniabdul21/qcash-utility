declare namespace InquiryDJBC {
    type Response = {
        idBiling: string;
        tanggalExpired: string;
        npwp: string;
        npwpPpjk: string;
        totalBayar: string;
        kantor: string;
        kodeDokumen: string;
        nomorDokumen: string;
        tanggalDokumen: string;
    };
    type Request = {
        accountNumber: string[];
        startDate: string;
        endDate: string;
        fileType: string;
    };
}
export type { InquiryDJBC };
