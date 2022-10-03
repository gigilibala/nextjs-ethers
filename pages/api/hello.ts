// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ethers } from "ethers-ts";
import type { NextApiRequest, NextApiResponse } from "next";
import { useState } from "react";

type Data = {
    name: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {}
